import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2376Component } from './test-component2376.component';

describe('TestComponent2376Component', () => {
  let component: TestComponent2376Component;
  let fixture: ComponentFixture<TestComponent2376Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2376Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
