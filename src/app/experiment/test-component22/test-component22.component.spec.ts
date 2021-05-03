import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent22Component } from './test-component22.component';

describe('TestComponent22Component', () => {
  let component: TestComponent22Component;
  let fixture: ComponentFixture<TestComponent22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
