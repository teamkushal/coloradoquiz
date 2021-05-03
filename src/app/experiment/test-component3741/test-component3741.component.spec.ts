import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3741Component } from './test-component3741.component';

describe('TestComponent3741Component', () => {
  let component: TestComponent3741Component;
  let fixture: ComponentFixture<TestComponent3741Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3741Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
