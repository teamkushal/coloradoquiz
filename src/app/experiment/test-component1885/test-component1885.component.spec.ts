import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1885Component } from './test-component1885.component';

describe('TestComponent1885Component', () => {
  let component: TestComponent1885Component;
  let fixture: ComponentFixture<TestComponent1885Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1885Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
