import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3057Component } from './test-component3057.component';

describe('TestComponent3057Component', () => {
  let component: TestComponent3057Component;
  let fixture: ComponentFixture<TestComponent3057Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3057Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
