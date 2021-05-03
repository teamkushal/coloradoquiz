import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent818Component } from './test-component818.component';

describe('TestComponent818Component', () => {
  let component: TestComponent818Component;
  let fixture: ComponentFixture<TestComponent818Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent818Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
