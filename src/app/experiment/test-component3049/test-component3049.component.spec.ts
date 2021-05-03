import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3049Component } from './test-component3049.component';

describe('TestComponent3049Component', () => {
  let component: TestComponent3049Component;
  let fixture: ComponentFixture<TestComponent3049Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3049Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
