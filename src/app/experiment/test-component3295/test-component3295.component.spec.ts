import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3295Component } from './test-component3295.component';

describe('TestComponent3295Component', () => {
  let component: TestComponent3295Component;
  let fixture: ComponentFixture<TestComponent3295Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3295Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
