import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent606Component } from './test-component606.component';

describe('TestComponent606Component', () => {
  let component: TestComponent606Component;
  let fixture: ComponentFixture<TestComponent606Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent606Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
