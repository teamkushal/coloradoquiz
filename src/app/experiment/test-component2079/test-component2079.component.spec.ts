import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2079Component } from './test-component2079.component';

describe('TestComponent2079Component', () => {
  let component: TestComponent2079Component;
  let fixture: ComponentFixture<TestComponent2079Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2079Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
