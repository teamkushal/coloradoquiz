import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3585Component } from './test-component3585.component';

describe('TestComponent3585Component', () => {
  let component: TestComponent3585Component;
  let fixture: ComponentFixture<TestComponent3585Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3585Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
