import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent329Component } from './test-component329.component';

describe('TestComponent329Component', () => {
  let component: TestComponent329Component;
  let fixture: ComponentFixture<TestComponent329Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent329Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
