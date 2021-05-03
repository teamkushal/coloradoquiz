import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3345Component } from './test-component3345.component';

describe('TestComponent3345Component', () => {
  let component: TestComponent3345Component;
  let fixture: ComponentFixture<TestComponent3345Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3345Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
