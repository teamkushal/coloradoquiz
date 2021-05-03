import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2875Component } from './test-component2875.component';

describe('TestComponent2875Component', () => {
  let component: TestComponent2875Component;
  let fixture: ComponentFixture<TestComponent2875Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2875Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
