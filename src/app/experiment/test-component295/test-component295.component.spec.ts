import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent295Component } from './test-component295.component';

describe('TestComponent295Component', () => {
  let component: TestComponent295Component;
  let fixture: ComponentFixture<TestComponent295Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent295Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
