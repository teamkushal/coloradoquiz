import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2321Component } from './test-component2321.component';

describe('TestComponent2321Component', () => {
  let component: TestComponent2321Component;
  let fixture: ComponentFixture<TestComponent2321Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2321Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
