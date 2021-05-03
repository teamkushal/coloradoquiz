import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2137Component } from './test-component2137.component';

describe('TestComponent2137Component', () => {
  let component: TestComponent2137Component;
  let fixture: ComponentFixture<TestComponent2137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2137Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
