import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent621Component } from './test-component621.component';

describe('TestComponent621Component', () => {
  let component: TestComponent621Component;
  let fixture: ComponentFixture<TestComponent621Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent621Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
