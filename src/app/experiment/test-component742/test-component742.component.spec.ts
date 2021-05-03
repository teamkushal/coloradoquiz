import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent742Component } from './test-component742.component';

describe('TestComponent742Component', () => {
  let component: TestComponent742Component;
  let fixture: ComponentFixture<TestComponent742Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent742Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
