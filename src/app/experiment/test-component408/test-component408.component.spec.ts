import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent408Component } from './test-component408.component';

describe('TestComponent408Component', () => {
  let component: TestComponent408Component;
  let fixture: ComponentFixture<TestComponent408Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent408Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
