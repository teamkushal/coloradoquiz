import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2125Component } from './test-component2125.component';

describe('TestComponent2125Component', () => {
  let component: TestComponent2125Component;
  let fixture: ComponentFixture<TestComponent2125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
