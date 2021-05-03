import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3854Component } from './test-component3854.component';

describe('TestComponent3854Component', () => {
  let component: TestComponent3854Component;
  let fixture: ComponentFixture<TestComponent3854Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3854Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
