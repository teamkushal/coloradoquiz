import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2241Component } from './test-component2241.component';

describe('TestComponent2241Component', () => {
  let component: TestComponent2241Component;
  let fixture: ComponentFixture<TestComponent2241Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2241Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
