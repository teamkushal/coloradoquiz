import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3161Component } from './test-component3161.component';

describe('TestComponent3161Component', () => {
  let component: TestComponent3161Component;
  let fixture: ComponentFixture<TestComponent3161Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3161Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
