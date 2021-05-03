import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3435Component } from './test-component3435.component';

describe('TestComponent3435Component', () => {
  let component: TestComponent3435Component;
  let fixture: ComponentFixture<TestComponent3435Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3435Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
