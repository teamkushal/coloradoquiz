import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1514Component } from './test-component1514.component';

describe('TestComponent1514Component', () => {
  let component: TestComponent1514Component;
  let fixture: ComponentFixture<TestComponent1514Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1514Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
