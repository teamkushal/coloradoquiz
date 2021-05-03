import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2252Component } from './test-component2252.component';

describe('TestComponent2252Component', () => {
  let component: TestComponent2252Component;
  let fixture: ComponentFixture<TestComponent2252Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2252Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
