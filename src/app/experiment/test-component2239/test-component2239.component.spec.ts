import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2239Component } from './test-component2239.component';

describe('TestComponent2239Component', () => {
  let component: TestComponent2239Component;
  let fixture: ComponentFixture<TestComponent2239Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2239Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
