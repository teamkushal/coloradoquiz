import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3251Component } from './test-component3251.component';

describe('TestComponent3251Component', () => {
  let component: TestComponent3251Component;
  let fixture: ComponentFixture<TestComponent3251Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3251Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
