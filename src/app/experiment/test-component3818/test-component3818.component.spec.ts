import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3818Component } from './test-component3818.component';

describe('TestComponent3818Component', () => {
  let component: TestComponent3818Component;
  let fixture: ComponentFixture<TestComponent3818Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3818Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
