import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3676Component } from './test-component3676.component';

describe('TestComponent3676Component', () => {
  let component: TestComponent3676Component;
  let fixture: ComponentFixture<TestComponent3676Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3676Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
