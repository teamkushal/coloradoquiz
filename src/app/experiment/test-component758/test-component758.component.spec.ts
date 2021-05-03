import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent758Component } from './test-component758.component';

describe('TestComponent758Component', () => {
  let component: TestComponent758Component;
  let fixture: ComponentFixture<TestComponent758Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent758Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
