import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3397Component } from './test-component3397.component';

describe('TestComponent3397Component', () => {
  let component: TestComponent3397Component;
  let fixture: ComponentFixture<TestComponent3397Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3397Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
