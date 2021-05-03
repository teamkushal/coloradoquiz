import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3605Component } from './test-component3605.component';

describe('TestComponent3605Component', () => {
  let component: TestComponent3605Component;
  let fixture: ComponentFixture<TestComponent3605Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3605Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
