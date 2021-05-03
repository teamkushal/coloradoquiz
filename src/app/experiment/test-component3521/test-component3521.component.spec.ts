import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3521Component } from './test-component3521.component';

describe('TestComponent3521Component', () => {
  let component: TestComponent3521Component;
  let fixture: ComponentFixture<TestComponent3521Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3521Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
