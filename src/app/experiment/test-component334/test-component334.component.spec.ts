import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent334Component } from './test-component334.component';

describe('TestComponent334Component', () => {
  let component: TestComponent334Component;
  let fixture: ComponentFixture<TestComponent334Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent334Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
