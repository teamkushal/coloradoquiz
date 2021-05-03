import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3656Component } from './test-component3656.component';

describe('TestComponent3656Component', () => {
  let component: TestComponent3656Component;
  let fixture: ComponentFixture<TestComponent3656Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3656Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
