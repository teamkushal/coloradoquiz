import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent812Component } from './test-component812.component';

describe('TestComponent812Component', () => {
  let component: TestComponent812Component;
  let fixture: ComponentFixture<TestComponent812Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent812Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
