import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent982Component } from './test-component982.component';

describe('TestComponent982Component', () => {
  let component: TestComponent982Component;
  let fixture: ComponentFixture<TestComponent982Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent982Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
