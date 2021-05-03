import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2525Component } from './test-component2525.component';

describe('TestComponent2525Component', () => {
  let component: TestComponent2525Component;
  let fixture: ComponentFixture<TestComponent2525Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2525Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
