import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2055Component } from './test-component2055.component';

describe('TestComponent2055Component', () => {
  let component: TestComponent2055Component;
  let fixture: ComponentFixture<TestComponent2055Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2055Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
