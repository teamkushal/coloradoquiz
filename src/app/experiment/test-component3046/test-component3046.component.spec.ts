import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3046Component } from './test-component3046.component';

describe('TestComponent3046Component', () => {
  let component: TestComponent3046Component;
  let fixture: ComponentFixture<TestComponent3046Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3046Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
