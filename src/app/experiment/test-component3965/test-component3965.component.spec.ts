import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3965Component } from './test-component3965.component';

describe('TestComponent3965Component', () => {
  let component: TestComponent3965Component;
  let fixture: ComponentFixture<TestComponent3965Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3965Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
