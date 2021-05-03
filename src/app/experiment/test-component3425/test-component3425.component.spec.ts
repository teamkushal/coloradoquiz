import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3425Component } from './test-component3425.component';

describe('TestComponent3425Component', () => {
  let component: TestComponent3425Component;
  let fixture: ComponentFixture<TestComponent3425Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3425Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
