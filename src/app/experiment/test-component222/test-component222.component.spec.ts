import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent222Component } from './test-component222.component';

describe('TestComponent222Component', () => {
  let component: TestComponent222Component;
  let fixture: ComponentFixture<TestComponent222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent222Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
