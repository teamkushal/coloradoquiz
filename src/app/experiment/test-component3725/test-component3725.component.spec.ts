import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3725Component } from './test-component3725.component';

describe('TestComponent3725Component', () => {
  let component: TestComponent3725Component;
  let fixture: ComponentFixture<TestComponent3725Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3725Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
