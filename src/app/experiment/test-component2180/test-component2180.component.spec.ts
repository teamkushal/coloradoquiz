import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2180Component } from './test-component2180.component';

describe('TestComponent2180Component', () => {
  let component: TestComponent2180Component;
  let fixture: ComponentFixture<TestComponent2180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2180Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
