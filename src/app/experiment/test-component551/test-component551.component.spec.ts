import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent551Component } from './test-component551.component';

describe('TestComponent551Component', () => {
  let component: TestComponent551Component;
  let fixture: ComponentFixture<TestComponent551Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent551Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
