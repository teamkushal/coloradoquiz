import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3090Component } from './test-component3090.component';

describe('TestComponent3090Component', () => {
  let component: TestComponent3090Component;
  let fixture: ComponentFixture<TestComponent3090Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3090Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
