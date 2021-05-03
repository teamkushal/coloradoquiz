import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1916Component } from './test-component1916.component';

describe('TestComponent1916Component', () => {
  let component: TestComponent1916Component;
  let fixture: ComponentFixture<TestComponent1916Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1916Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
