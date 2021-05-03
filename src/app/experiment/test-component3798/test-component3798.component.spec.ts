import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3798Component } from './test-component3798.component';

describe('TestComponent3798Component', () => {
  let component: TestComponent3798Component;
  let fixture: ComponentFixture<TestComponent3798Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3798Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
