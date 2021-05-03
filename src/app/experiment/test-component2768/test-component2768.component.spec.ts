import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2768Component } from './test-component2768.component';

describe('TestComponent2768Component', () => {
  let component: TestComponent2768Component;
  let fixture: ComponentFixture<TestComponent2768Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2768Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
