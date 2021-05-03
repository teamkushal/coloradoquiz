import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3572Component } from './test-component3572.component';

describe('TestComponent3572Component', () => {
  let component: TestComponent3572Component;
  let fixture: ComponentFixture<TestComponent3572Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3572Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
