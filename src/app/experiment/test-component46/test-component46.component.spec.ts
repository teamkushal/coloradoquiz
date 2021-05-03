import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent46Component } from './test-component46.component';

describe('TestComponent46Component', () => {
  let component: TestComponent46Component;
  let fixture: ComponentFixture<TestComponent46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent46Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
